<?php

namespace App\Enums;

enum Priority: string
{
    case LOW = 'low';
    case MEDIUM = 'medium';
    case HIGH = 'high';

    public function label(): string
    {
        return match ($this) {
            self::LOW => 'Low',
            self::MEDIUM => 'Medium',
            self::HIGH => 'High',
        };
    }

    public function icon(): string
    {
        return match ($this) {
            self::LOW => 'arrow-down',
            self::MEDIUM => 'arrow-right',
            self::HIGH => 'arrow-up',
        };
    }
}
