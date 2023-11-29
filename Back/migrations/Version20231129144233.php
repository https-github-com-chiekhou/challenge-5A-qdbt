<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231129144233 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE creneau_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE day_off_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE etablissement_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE feedback_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE prestataire_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE reservation_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE salarie_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE service_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE creneau (id INT NOT NULL, salarie_id INT NOT NULL, day VARCHAR(9) NOT NULL, start_time TIME(0) WITHOUT TIME ZONE NOT NULL, end_time TIME(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_F9668B5F5859934A ON creneau (salarie_id)');
        $this->addSql('CREATE TABLE day_off (id INT NOT NULL, salarie_id INT NOT NULL, name VARCHAR(255) NOT NULL, date_start DATE NOT NULL, date_end DATE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_926C726C5859934A ON day_off (salarie_id)');
        $this->addSql('COMMENT ON COLUMN day_off.date_start IS \'(DC2Type:date_immutable)\'');
        $this->addSql('COMMENT ON COLUMN day_off.date_end IS \'(DC2Type:date_immutable)\'');
        $this->addSql('CREATE TABLE etablissement (id INT NOT NULL, prestataire_id INT NOT NULL, name VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_20FD592CBE3DB2B7 ON etablissement (prestataire_id)');
        $this->addSql('CREATE TABLE feedback (id INT NOT NULL, client_id INT NOT NULL, prestataire_id INT NOT NULL, note INT NOT NULL, commentaire VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_D229445819EB6921 ON feedback (client_id)');
        $this->addSql('CREATE INDEX IDX_D2294458BE3DB2B7 ON feedback (prestataire_id)');
        $this->addSql('CREATE TABLE prestataire (id INT NOT NULL, client_id INT DEFAULT NULL, nom_entreprise VARCHAR(255) NOT NULL, description_entreprise VARCHAR(255) NOT NULL, contact VARCHAR(255) NOT NULL, kbis VARCHAR(255) NOT NULL, statistique VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_60A2648019EB6921 ON prestataire (client_id)');
        $this->addSql('CREATE TABLE reservation (id INT NOT NULL, client_id INT NOT NULL, salarie_id INT NOT NULL, prestataire_id INT NOT NULL, status VARCHAR(255) NOT NULL, commentaire VARCHAR(255) NOT NULL, date DATE NOT NULL, start_time TIME(0) WITHOUT TIME ZONE NOT NULL, end_time TIME(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_42C8495519EB6921 ON reservation (client_id)');
        $this->addSql('CREATE INDEX IDX_42C849555859934A ON reservation (salarie_id)');
        $this->addSql('CREATE INDEX IDX_42C84955BE3DB2B7 ON reservation (prestataire_id)');
        $this->addSql('COMMENT ON COLUMN reservation.date IS \'(DC2Type:date_immutable)\'');
        $this->addSql('CREATE TABLE salarie (id INT NOT NULL, prestataire_id INT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_828E3A1ABE3DB2B7 ON salarie (prestataire_id)');
        $this->addSql('CREATE TABLE service (id INT NOT NULL, prestataire_id INT DEFAULT NULL, nom VARCHAR(255) NOT NULL, tarif DOUBLE PRECISION NOT NULL, categorie VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_E19D9AD2BE3DB2B7 ON service (prestataire_id)');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, email VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, roles JSON NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('COMMENT ON COLUMN "user".created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE creneau ADD CONSTRAINT FK_F9668B5F5859934A FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE day_off ADD CONSTRAINT FK_926C726C5859934A FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE etablissement ADD CONSTRAINT FK_20FD592CBE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE feedback ADD CONSTRAINT FK_D229445819EB6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE feedback ADD CONSTRAINT FK_D2294458BE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prestataire ADD CONSTRAINT FK_60A2648019EB6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C8495519EB6921 FOREIGN KEY (client_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849555859934A FOREIGN KEY (salarie_id) REFERENCES salarie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955BE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE salarie ADD CONSTRAINT FK_828E3A1ABE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2BE3DB2B7 FOREIGN KEY (prestataire_id) REFERENCES prestataire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE creneau_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE day_off_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE etablissement_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE feedback_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE prestataire_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE reservation_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE salarie_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE service_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('ALTER TABLE creneau DROP CONSTRAINT FK_F9668B5F5859934A');
        $this->addSql('ALTER TABLE day_off DROP CONSTRAINT FK_926C726C5859934A');
        $this->addSql('ALTER TABLE etablissement DROP CONSTRAINT FK_20FD592CBE3DB2B7');
        $this->addSql('ALTER TABLE feedback DROP CONSTRAINT FK_D229445819EB6921');
        $this->addSql('ALTER TABLE feedback DROP CONSTRAINT FK_D2294458BE3DB2B7');
        $this->addSql('ALTER TABLE prestataire DROP CONSTRAINT FK_60A2648019EB6921');
        $this->addSql('ALTER TABLE reservation DROP CONSTRAINT FK_42C8495519EB6921');
        $this->addSql('ALTER TABLE reservation DROP CONSTRAINT FK_42C849555859934A');
        $this->addSql('ALTER TABLE reservation DROP CONSTRAINT FK_42C84955BE3DB2B7');
        $this->addSql('ALTER TABLE salarie DROP CONSTRAINT FK_828E3A1ABE3DB2B7');
        $this->addSql('ALTER TABLE service DROP CONSTRAINT FK_E19D9AD2BE3DB2B7');
        $this->addSql('DROP TABLE creneau');
        $this->addSql('DROP TABLE day_off');
        $this->addSql('DROP TABLE etablissement');
        $this->addSql('DROP TABLE feedback');
        $this->addSql('DROP TABLE prestataire');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE salarie');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE "user"');
    }
}
