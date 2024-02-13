<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240123075843 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prestataire DROP CONSTRAINT fk_60a2648019eb6921');
        $this->addSql('DROP INDEX uniq_60a2648019eb6921');
        $this->addSql('ALTER TABLE prestataire RENAME COLUMN client_id TO user_id');
        $this->addSql('ALTER TABLE prestataire ADD CONSTRAINT FK_60A26480A76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_60A26480A76ED395 ON prestataire (user_id)');
        $this->addSql('ALTER TABLE service ADD etablissement_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2FF631228 FOREIGN KEY (etablissement_id) REFERENCES etablissement (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_E19D9AD2FF631228 ON service (etablissement_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE prestataire DROP CONSTRAINT FK_60A26480A76ED395');
        $this->addSql('DROP INDEX UNIQ_60A26480A76ED395');
        $this->addSql('ALTER TABLE prestataire RENAME COLUMN user_id TO client_id');
        $this->addSql('ALTER TABLE prestataire ADD CONSTRAINT fk_60a2648019eb6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX uniq_60a2648019eb6921 ON prestataire (client_id)');
        $this->addSql('ALTER TABLE service DROP CONSTRAINT FK_E19D9AD2FF631228');
        $this->addSql('DROP INDEX IDX_E19D9AD2FF631228');
        $this->addSql('ALTER TABLE service DROP etablissement_id');
    }
}
