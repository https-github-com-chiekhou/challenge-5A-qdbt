<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240213094020 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE feedback_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE feed_back_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE feed_back (id INT NOT NULL, prestataire_id INT NOT NULL, client_id INT DEFAULT NULL, note INT NOT NULL, commentaire VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_ED592A60BE3DB2B7 ON feed_back (prestataire_id)');
        $this->addSql('CREATE INDEX IDX_ED592A6019EB6921 ON feed_back (client_id)');
        $this->addSql('ALTER TABLE feed_back ADD CONSTRAINT FK_ED592A60BE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE feed_back ADD CONSTRAINT FK_ED592A6019EB6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE feedback DROP CONSTRAINT fk_d229445819eb6921');
        $this->addSql('ALTER TABLE feedback DROP CONSTRAINT fk_d2294458be3db2b7');
        $this->addSql('DROP TABLE feedback');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE feed_back_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE feedback_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE feedback (id INT NOT NULL, client_id INT NOT NULL, prestataire_id INT NOT NULL, note INT NOT NULL, commentaire VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX idx_d2294458be3db2b7 ON feedback (prestataire_id)');
        $this->addSql('CREATE INDEX idx_d229445819eb6921 ON feedback (client_id)');
        $this->addSql('ALTER TABLE feedback ADD CONSTRAINT fk_d229445819eb6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE feedback ADD CONSTRAINT fk_d2294458be3db2b7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE feed_back DROP CONSTRAINT FK_ED592A60BE3DB2B7');
        $this->addSql('ALTER TABLE feed_back DROP CONSTRAINT FK_ED592A6019EB6921');
        $this->addSql('DROP TABLE feed_back');
    }
}
