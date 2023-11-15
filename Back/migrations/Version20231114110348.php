<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231114110348 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prestataire ADD client_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prestataire ADD CONSTRAINT FK_60A2648019EB6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_60A2648019EB6921 ON prestataire (client_id)');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT fk_8d93d649be3db2b7');
        $this->addSql('DROP INDEX uniq_8d93d649be3db2b7');
        $this->addSql('ALTER TABLE "user" DROP prestataire_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE "user" ADD prestataire_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT fk_8d93d649be3db2b7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX uniq_8d93d649be3db2b7 ON "user" (prestataire_id)');
        $this->addSql('ALTER TABLE prestataire DROP CONSTRAINT FK_60A2648019EB6921');
        $this->addSql('DROP INDEX UNIQ_60A2648019EB6921');
        $this->addSql('ALTER TABLE prestataire DROP client_id');
    }
}
