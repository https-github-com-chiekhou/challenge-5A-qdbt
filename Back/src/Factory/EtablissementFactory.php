<?php

namespace App\Factory;

use App\Entity\Etablissement;
use App\Repository\EtablissementRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Etablissement>
 *
 * @method        Etablissement|Proxy                     create(array|callable $attributes = [])
 * @method static Etablissement|Proxy                     createOne(array $attributes = [])
 * @method static Etablissement|Proxy                     find(object|array|mixed $criteria)
 * @method static Etablissement|Proxy                     findOrCreate(array $attributes)
 * @method static Etablissement|Proxy                     first(string $sortedField = 'id')
 * @method static Etablissement|Proxy                     last(string $sortedField = 'id')
 * @method static Etablissement|Proxy                     random(array $attributes = [])
 * @method static Etablissement|Proxy                     randomOrCreate(array $attributes = [])
 * @method static EtablissementRepository|RepositoryProxy repository()
 * @method static Etablissement[]|Proxy[]                 all()
 * @method static Etablissement[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static Etablissement[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static Etablissement[]|Proxy[]                 findBy(array $attributes)
 * @method static Etablissement[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static Etablissement[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 */
final class EtablissementFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        return [
            'adresse' => self::faker()->text(255),
            'name' => self::faker()->text(255),
            'prestataire' => PrestataireFactory::new(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Etablissement $etablissement): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Etablissement::class;
    }
}
