<?php

namespace App\Controller\Tests;

// tests/Controller/SecurityControllerTest.php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SecurityControllerTest extends WebTestCase
{
    public function testLogin()
    {
        // Crée un client HTTP pour simuler les requêtes
        $client = static::createClient();

        // Effectue une requête POST vers l'URL /auth
        $client->request('POST', '/auth');

        // Vérifie que la réponse est un code HTTP 200 (OK)
        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        // Vérifie que la réponse est au format JSON
        $this->assertJson($client->getResponse()->getContent());

        // Convertit la réponse JSON en tableau associatif
        $responseData = json_decode($client->getResponse()->getContent(), true);

        // Vérifie que le champ 'email' est présent dans la réponse
        $this->assertArrayHasKey('email', $responseData);

        // Vérifie que le champ 'roles' est présent dans la réponse
        $this->assertArrayHasKey('roles', $responseData);
    }

    public function testLogout()
    {
        // Crée un client HTTP pour simuler les requêtes
        $client = static::createClient();

        // Effectue une requête GET vers l'URL /logout
        $client->request('GET', '/logout');

        // Vérifie que la réponse est un code HTTP 200 (OK)
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}
