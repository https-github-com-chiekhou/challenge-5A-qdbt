<?php

namespace App\Entity\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\Prestataire;
use App\Factory\PrestataireFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;

class PrestataireTest extends ApiTestCase
{
    // This trait provided by Foundry will take care of refreshing the database content to a known state before each test
    use ResetDatabase, Factories;


    public function testGetCollection(): void
    {
        
        PrestataireFactory::createMany(30);
    
        // The client implements Symfony HttpClient's `HttpClientInterface`, and the response `ResponseInterface`
        $response = static::createClient()->request('GET', 'api/prestataires');

        $this->assertResponseIsSuccessful();
        // Asserts that the returned content type is JSON-LD (the default)
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');

        // Asserts that the returned JSON is a superset of this one
        $this->assertJsonContains([
            '@context' => '/api/contexts/Prestataire',
            '@type' => 'hydra:Collection',
            'hydra:totalItems' => 30,
        ]);

        // Because test fixtures are automatically loaded between each test, you can assert on them
        $this->assertCount(30, $response->toArray()['hydra:member']);

        // Asserts that the returned JSON is validated by the JSON Schema generated for this resource by API Platform
        // This generated JSON Schema is also used in the OpenAPI spec!
        $this->assertMatchesResourceCollectionJsonSchema(Prestataire::class);
    }

    public function testCreatePrestataire(): void
    {
        $response = static::createClient()->request('POST', '/api/prestataires', ['json' => [
            'contact' => 'test@gmail.com',
            'descriptionEntreprise' => 'Très bonne entreprise',
            'kbis' => '123456789098765',
            'nomEntreprise' => 'Presta Company',
            // 'user' => '/api/users/723'
        ]]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/Prestataire',
            '@type' => 'Prestataire',
            // 'user' => '/api/users/723'
        ]);
        
        $this->assertStringStartsWith('/api/prestataires/', $response->toArray()['@id']);
        $this->assertMatchesResourceItemJsonSchema(Prestataire::class);
    }


    public function testUpdatePrestataire(): void
    {
       
        PrestataireFactory::createOne(['contact' => 'lamuerte@gmail.com']);
    
        $client = static::createClient();
 
        $iri = $this->findIriBy(Prestataire::class, ['contact' => 'lamuerte@gmail.com']);

        // Use the PATCH method here to do a partial update
        $client->request('PATCH', $iri, [
            'json' => [
                'kbis' => '12342672828211',
                'contact' => 'lamuerte@gmail.com'
                
            ],
            'headers' => [
                'Content-Type' => 'application/merge-patch+json',
            ]           
        ]);

        $this->assertResponseIsSuccessful();
        $this->assertJsonContains([
            '@id' => $iri,
            '@context' => '/api/contexts/Prestataire',
            '@type' => 'Prestataire',
        ]);
    }

    public function testDeletePrestataire(): void
    {
     
        PrestataireFactory::createOne(['contact' => 'test@gmail.com']);

        $client = static::createClient();
        $iri = $this->findIriBy(Prestataire::class, ['contact' => 'test@gmail.com']);

        $client->request('DELETE', $iri);

        $this->assertResponseStatusCodeSame(204);
        $this->assertNull(
            // Through the container, you can access all your services from the tests, including the ORM, the mailer, remote API clients...
            static::getContainer()->get('doctrine')->getRepository(Prestataire::class)->findOneBy(['contact' => 'test@gmail.com'])
        );
    }
}