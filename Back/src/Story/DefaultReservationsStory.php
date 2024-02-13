<?php

namespace App\Story;

use App\Factory\ReservationFactory;
use Zenstruck\Foundry\Story;

final class DefaultReservationsStory extends Story
{
    public function build(): void
    {
        ReservationFactory::createMany(30);
    }
}
