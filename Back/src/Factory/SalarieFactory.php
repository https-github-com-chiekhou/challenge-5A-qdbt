<?php

namespace App\Factory;

use App\Entity\Salarie;
use App\Repository\SalarieRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Salarie>
 *
 * @method        Salarie|Proxy                     create(array|callable $attributes = [])
 * @method static Salarie|Proxy                     createOne(array $attributes = [])
 * @method static Salarie|Proxy                     find(object|array|mixed $criteria)
 * @method static Salarie|Proxy                     findOrCreate(array $attributes)
 * @method static Salarie|Proxy                     first(string $sortedField = 'id')
 * @method static Salarie|Proxy                     last(string $sortedField = 'id')
 * @method static Salarie|Proxy                     random(array $attributes = [])
 * @method static Salarie|Proxy                     randomOrCreate(array $attributes = [])
 * @method static SalarieRepository|RepositoryProxy repository()
 * @method static Salarie[]|Proxy[]                 all()
 * @method static Salarie[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static Salarie[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static Salarie[]|Proxy[]                 findBy(array $attributes)
 * @method static Salarie[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static Salarie[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 */
final class SalarieFactory extends ModelFactory
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
            'nom' => self::faker()->text(255),
            'prenom' => self::faker()->text(255),
            'prestataire' => PrestataireFactory::new(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Salarie $salarie): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Salarie::class;
    }
}
