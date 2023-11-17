<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231117133526 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE test_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE day_off_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE day_off (id INT NOT NULL, salarie_id INT NOT NULL, name VARCHAR(255) NOT NULL, date_start DATE NOT NULL, date_end DATE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_926C726C5859934A ON day_off (salarie_id)');
        $this->addSql('COMMENT ON COLUMN day_off.date_start IS \'(DC2Type:date_immutable)\'');
        $this->addSql('COMMENT ON COLUMN day_off.date_end IS \'(DC2Type:date_immutable)\'');
        $this->addSql('ALTER TABLE day_off ADD CONSTRAINT FK_926C726C5859934A FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE test');
        $this->addSql('ALTER TABLE creneau DROP CONSTRAINT fk_f9668b5fbe3db2b7');
        $this->addSql('DROP INDEX idx_f9668b5fbe3db2b7');
        $this->addSql('ALTER TABLE creneau ADD salarie_id INT NOT NULL');
        $this->addSql('ALTER TABLE creneau ADD day VARCHAR(9) NOT NULL');
        $this->addSql('ALTER TABLE creneau ADD start_time TIME(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE creneau ADD end_time TIME(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE creneau DROP prestataire_id');
        $this->addSql('ALTER TABLE creneau DROP date_start');
        $this->addSql('ALTER TABLE creneau DROP date_end');
        $this->addSql('ALTER TABLE creneau ADD CONSTRAINT FK_F9668B5F5859934A FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_F9668B5F5859934A ON creneau (salarie_id)');
        $this->addSql('ALTER TABLE etablissement ALTER prestataire_id SET NOT NULL');
        $this->addSql('ALTER TABLE etablissement RENAME COLUMN nom TO name');
        $this->addSql('ALTER TABLE feedback ALTER client_id SET NOT NULL');
        $this->addSql('ALTER TABLE feedback ALTER prestataire_id SET NOT NULL');
        $this->addSql('ALTER TABLE prestataire RENAME COLUMN statistiques TO statistique');
        $this->addSql('ALTER TABLE reservation DROP CONSTRAINT fk_42c849557d0729a9');
        $this->addSql('DROP INDEX uniq_42c849557d0729a9');
        $this->addSql('ALTER TABLE reservation ADD salarie_id INT NOT NULL');
        $this->addSql('ALTER TABLE reservation ADD date DATE NOT NULL');
        $this->addSql('ALTER TABLE reservation ADD start_time TIME(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE reservation ADD end_time TIME(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE reservation DROP creneau_id');
        $this->addSql('ALTER TABLE reservation ALTER client_id SET NOT NULL');
        $this->addSql('ALTER TABLE reservation ALTER prestataire_id SET NOT NULL');
        $this->addSql('COMMENT ON COLUMN reservation.date IS \'(DC2Type:date_immutable)\'');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849555859934A FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_42C849555859934A ON reservation (salarie_id)');
        $this->addSql('ALTER TABLE salarie DROP horaire');
        $this->addSql('ALTER TABLE salarie DROP conge');
        $this->addSql('ALTER TABLE salarie ALTER prestataire_id SET NOT NULL');
        $this->addSql('ALTER TABLE service ADD nom VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE service DROP nom_service');
        $this->addSql('ALTER TABLE service DROP description');
        $this->addSql('ALTER TABLE service DROP duree');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE day_off_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE test_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE test (id INT NOT NULL, test VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE day_off DROP CONSTRAINT FK_926C726C5859934A');
        $this->addSql('DROP TABLE day_off');
        $this->addSql('ALTER TABLE reservation DROP CONSTRAINT FK_42C849555859934A');
        $this->addSql('DROP INDEX IDX_42C849555859934A');
        $this->addSql('ALTER TABLE reservation ADD creneau_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reservation DROP salarie_id');
        $this->addSql('ALTER TABLE reservation DROP date');
        $this->addSql('ALTER TABLE reservation DROP start_time');
        $this->addSql('ALTER TABLE reservation DROP end_time');
        $this->addSql('ALTER TABLE reservation ALTER client_id DROP NOT NULL');
        $this->addSql('ALTER TABLE reservation ALTER prestataire_id DROP NOT NULL');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT fk_42c849557d0729a9 FOREIGN KEY (creneau_id) REFERENCES creneau (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX uniq_42c849557d0729a9 ON reservation (creneau_id)');
        $this->addSql('ALTER TABLE etablissement ALTER prestataire_id DROP NOT NULL');
        $this->addSql('ALTER TABLE etablissement RENAME COLUMN name TO nom');
        $this->addSql('ALTER TABLE creneau DROP CONSTRAINT FK_F9668B5F5859934A');
        $this->addSql('DROP INDEX IDX_F9668B5F5859934A');
        $this->addSql('ALTER TABLE creneau ADD prestataire_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE creneau ADD date_start DATE NOT NULL');
        $this->addSql('ALTER TABLE creneau ADD date_end DATE NOT NULL');
        $this->addSql('ALTER TABLE creneau DROP salarie_id');
        $this->addSql('ALTER TABLE creneau DROP day');
        $this->addSql('ALTER TABLE creneau DROP start_time');
        $this->addSql('ALTER TABLE creneau DROP end_time');
        $this->addSql('ALTER TABLE creneau ADD CONSTRAINT fk_f9668b5fbe3db2b7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_f9668b5fbe3db2b7 ON creneau (prestataire_id)');
        $this->addSql('ALTER TABLE prestataire RENAME COLUMN statistique TO statistiques');
        $this->addSql('ALTER TABLE feedback ALTER client_id DROP NOT NULL');
        $this->addSql('ALTER TABLE feedback ALTER prestataire_id DROP NOT NULL');
        $this->addSql('ALTER TABLE service ADD description VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE service ADD duree TIME(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE service RENAME COLUMN nom TO nom_service');
        $this->addSql('ALTER TABLE salarie ADD horaire TIME(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE salarie ADD conge DATE NOT NULL');
        $this->addSql('ALTER TABLE salarie ALTER prestataire_id DROP NOT NULL');
    }
}
