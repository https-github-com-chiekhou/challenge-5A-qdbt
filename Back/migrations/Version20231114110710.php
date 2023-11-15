<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231114110710 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE creneau DROP CONSTRAINT fk_f9668b5f835b0fb1');
        $this->addSql('DROP INDEX idx_f9668b5f835b0fb1');
        $this->addSql('ALTER TABLE creneau RENAME COLUMN id_prestataire_id TO prestataire_id');
        $this->addSql('ALTER TABLE creneau ADD CONSTRAINT FK_F9668B5FBE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F9668B5FBE3DB2B7 ON creneau (prestataire_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE creneau DROP CONSTRAINT FK_F9668B5FBE3DB2B7');
        $this->addSql('DROP INDEX IDX_F9668B5FBE3DB2B7');
        $this->addSql('ALTER TABLE creneau RENAME COLUMN prestataire_id TO id_prestataire_id');
        $this->addSql('ALTER TABLE creneau ADD CONSTRAINT fk_f9668b5f835b0fb1 FOREIGN KEY (id_prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_f9668b5f835b0fb1 ON creneau (id_prestataire_id)');
    }
}
