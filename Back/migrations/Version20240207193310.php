<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240207193310 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE planning_id_seq CASCADE');
        $this->addSql('ALTER TABLE planning DROP CONSTRAINT fk_d499bff65859934a');
        $this->addSql('ALTER TABLE planning DROP CONSTRAINT fk_d499bff67e81c1e1');
        $this->addSql('ALTER TABLE planning DROP CONSTRAINT fk_d499bff67d0729a9');
        $this->addSql('DROP TABLE planning');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE planning_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE planning (id INT NOT NULL, salarie_id INT DEFAULT NULL, day_off_id INT DEFAULT NULL, creneau_id INT DEFAULT NULL, date_planning DATE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX idx_d499bff67d0729a9 ON planning (creneau_id)');
        $this->addSql('CREATE INDEX idx_d499bff67e81c1e1 ON planning (day_off_id)');
        $this->addSql('CREATE INDEX idx_d499bff65859934a ON planning (salarie_id)');
        $this->addSql('ALTER TABLE planning ADD CONSTRAINT fk_d499bff65859934a FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE planning ADD CONSTRAINT fk_d499bff67e81c1e1 FOREIGN KEY (day_off_id) REFERENCES day_off (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE planning ADD CONSTRAINT fk_d499bff67d0729a9 FOREIGN KEY (creneau_id) REFERENCES creneau (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
