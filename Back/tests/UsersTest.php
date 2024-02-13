<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

use App\Entity\User;
use App\Factory\UserFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;

class UsersTest extends ApiTestCase
{
    private ?string $token = null;

    use ResetDatabase, Factories;
   
  
    protected function createClientWithCredentials($token = null): Client
    {
        $token = $token ?: $this->getToken();

        return static::createClient([], ['headers' => ['authorization' => 'Bearer '.$token]]);
    }

 
    protected function getToken($body = []): string
    {
        if ($this->token) {
            return $this->token;
        }

        $response = static::createClient()->request('POST', '/auth', ['json' => $body ?: [
            'email' => 'fati@gmail.com',
            'password' => 'Margaret@92',
        ],
        'headers' => ['Content-Type' => 'application/json'],    
    ]);

        $this->assertResponseIsSuccessful();
        $data = $response->toArray();
        $this->token = $data['token'];

        return $data['token'];
    }

    public function testGetCollection(): void
    {
        
        UserFactory::createMany(30);
    
        $response = static::createClient()->request('GET', 'api/users');

        $this->assertResponseIsSuccessful();
        // Asserts that the returned content type is JSON-LD (the default)
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');

        $this->assertJsonContains([
            '@context' => '/api/contexts/User',
            '@type' => 'hydra:Collection',
            'hydra:totalItems' => 30,
        ]);

        $this->assertCount(30, $response->toArray()['hydra:member']);

        $this->assertMatchesResourceCollectionJsonSchema(User::class);
    }

    public function testCreateUser(): void
    {
        $response = static::createClient()->request('POST', 'api/users', ['json' => [
            'email' => 'fati@gmail.com',
            'nom' => 'Atwood',
            'prenom' => 'Margaret',
            'telephone' => '0147935311',
            'password' => 'Margaret@92',
            'plainPassword' => 'Margaret@92',
            "roles"=> ["ROLE_PRESTATAIRE"]
        ]]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/User',
            '@type' => 'User',
            'email' => 'fati@gmail.com',
            'nom' => 'Atwood',
            'prenom' => 'Margaret',
            'telephone' => '0147935311',
            "roles"=> ["ROLE_PRESTATAIRE"],
            "isValid" => false,
            "comments" => [],
            "reservations" => [],
            "feedback" => []  
        ]);
        
        $this->assertStringStartsWith('/api/users/', $response->toArray()['@id']);
        $this->assertMatchesResourceItemJsonSchema(User::class);
    }

    public function testUpdateUser(): void
    {
     
        UserFactory::createOne(['email' => 'admin@gmail.fr']);
    
        $client = static::createClient();
        // findIriBy allows to retrieve the IRI of an item by searching for some of its properties.
        $iri = $this->findIriBy(User::class, ['email' => 'admin@gmail.fr']);

        // Use the PATCH method here to do a partial update
        $client->request('PATCH', $iri, [
            'json' => [
                'nom' => 'updated nom',
            ],
            'headers' => [
                'Content-Type' => 'application/merge-patch+json',
            ]           
        ]);

        $this->assertResponseIsSuccessful();
        $this->assertJsonContains([
            '@id' => $iri,
            'email' => 'admin@gmail.fr',
            'nom' => 'updated nom',
        ]);
    }

    public function testDeleteUser(): void
    {
        // Only create the book we need with a given ISBN
        UserFactory::createOne(['email' => 'test@gmail.com']);

        $client = static::createClient();
        $iri = $this->findIriBy(User::class, ['email' => 'test@gmail.com']);

        $client->request('DELETE', $iri);

        $this->assertResponseStatusCodeSame(204);
        $this->assertNull(
            // Through the container, you can access all your services from the tests, including the ORM, the mailer, remote API clients...
            static::getContainer()->get('doctrine')->getRepository(User::class)->findOneBy(['email' => 'test@gmail.com'])
        );
    }
}