import { MigrationInterface, QueryRunner } from "typeorm";

export class FakeData1607244669982 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into client (name, email, credit)
    values ('Jolynn', 'jsimm0@istockphoto.com', 55.96);
    insert into client (name, email, credit)
    values ('Aguie', 'aalelsandrowicz1@oaic.gov.au', 84.97);
    insert into client (name, email, credit)
    values ('Jillane', 'jfarnfield2@state.gov', 72.3);
    insert into client (name, email, credit)
    values ('Xever', 'xplaxton3@paginegialle.it', 2.07);
    insert into client (name, email, credit)
    values ('Ardeen', 'acarbett4@jigsy.com', 47.77);
    insert into client (name, email, credit)
    values ('Claudianus', 'correll5@de.vu', -3.08);
    insert into client (name, email, credit)
    values ('Terza', 'tvasyunin6@furl.net', 96.48);
    insert into client (name, email, credit)
    values ('Ophelie', 'osogg7@google.com.hk', 18.85);
    insert into client (name, email, credit)
    values ('Cori', 'curridge8@webmd.com', 19.04);
    insert into client (name, email, credit)
    values ('Andi', 'askouling9@opera.com', 40.88);
    insert into client (name, email, credit)
    values ('Beniamino', 'bbezantsa@ted.com', 86.92);
    insert into client (name, email, credit)
    values ('Ariela', 'amclorinanb@t.co', 4.58);
    insert into client (name, email, credit)
    values ('Lesya', 'lscripturec@patch.com', 97.9);
    insert into client (name, email, credit)
    values ('Osbourne', 'oculrossd@harvard.edu', 62.92);
    insert into client (name, email, credit)
    values ('Lauretta', 'lbattse@cisco.com', 0.31);
    insert into client (name, email, credit)
    values ('Dotty', 'dcockshottf@upenn.edu', 45.85);
    insert into client (name, email, credit)
    values ('Mignon', 'mcaughang@privacy.gov.au', 86.67);
    insert into client (name, email, credit)
    values ('Nicole', 'nexrollh@phpbb.com', 18.33);
    insert into client (name, email, credit)
    values ('Greggory', 'gmcclochi@sakura.ne.jp', 75.25);
    insert into client (name, email, credit)
    values ('Nyssa', 'nfaintj@yellowbook.com', 37.4);
    insert into client (name, email, credit)
    values ('Emalia', 'ebeenhamk@edublogs.org', 81.53);
    insert into client (name, email, credit)
    values ('Manuel', 'mabbal@mit.edu', 4.39);
    insert into client (name, email, credit)
    values ('Erroll', 'edornanm@umn.edu', 73.7);
    insert into client (name, email, credit)
    values ('Dennie', 'ddorrinsn@addtoany.com', 92.97);
    insert into client (name, email, credit)
    values ('Joly', 'jnyso@apache.org', 30.25);
    insert into client (name, email, credit)
    values ('Daniela', 'ddumbreckp@ask.com', 24.5);
    insert into client (name, email, credit)
    values ('Tammie', 'trabjohnsq@parallels.com', 80.12);
    insert into client (name, email, credit)
    values ('Ruprecht', 'rwhitseyr@salon.com', 40.84);
    insert into client (name, email, credit)
    values ('Spencer', 'sboogs@google.com.au', 41.22);
    insert into client (name, email, credit)
    values ('Eada', 'emahadyt@goo.ne.jp', 55.08);
    insert into client (name, email, credit)
    values ('Sheelah', 'sgerrelsu@oakley.com', 25.22);
    insert into client (name, email, credit)
    values ('Lucita', 'leasleav@purevolume.com', 68.91);
    insert into client (name, email, credit)
    values ('Jeanne', 'jdevereuxw@ucla.edu', 78.82);
    insert into client (name, email, credit)
    values ('Laird', 'lhannyx@cocolog-nifty.com', -6.79);
    insert into client (name, email, credit)
    values ('Olimpia', 'ocooky@pagesperso-orange.fr', 69.26);
    insert into client (name, email, credit)
    values ('Germain', 'gwyldborez@forbes.com', 71.28);
    insert into client (name, email, credit)
    values ('Ronald', 'rbrigstock10@360.cn', 70.67);
    insert into client (name, email, credit)
    values ('Adeline', 'aleibold11@google.com.au', 32.0);
    insert into client (name, email, credit)
    values ('Shalne', 'squick12@amazon.com', 36.1);
    insert into client (name, email, credit)
    values ('Hyacinth', 'hrenachowski13@ebay.co.uk', 40.7);
    insert into client (name, email, credit)
    values ('Buckie', 'bhacquard14@amazonaws.com', 69.71);
    insert into client (name, email, credit)
    values ('Angelle', 'afossick15@printfriendly.com', -9.33);
    insert into client (name, email, credit)
    values ('Joelie', 'jgogan16@google.com.hk', 0.66);
    insert into client (name, email, credit)
    values ('Clareta', 'ckase17@washington.edu', 17.17);
    insert into client (name, email, credit)
    values ('Dianna', 'drisdall18@prnewswire.com', 73.98);
    insert into client (name, email, credit)
    values ('Ricoriki', 'rriceards19@cloudflare.com', 16.42);
    insert into client (name, email, credit)
    values ('Mort', 'mrickell1a@geocities.jp', 28.98);
    insert into client (name, email, credit)
    values ('Nolly', 'ncoom1b@narod.ru', 61.41);
    insert into client (name, email, credit)
    values ('Bradford', 'bdomenget1c@tiny.cc', 33.59);
    insert into client (name, email, credit)
    values ('Derrick', 'dodoran1d@free.fr', 55.07);
    insert into product(name, price, quantity, picture_url )
    values(
        'Aiguillettes de poulet au miel et nouilles soba aux légumes',
        4.9,
        10,
        'http://localhost:4000/images/Aiguillettes_de_poulet_au_miel_et_nouilles_soba_aux_legumes.jpg'
      );
    insert into product(name, price, quantity, picture_url )
    values(
        'Aiguillettes de poulet au miel semoule epicee et carottes roties',
        4.9,
        15,
        'http://localhost:4000/images/Aiguillettes_de_poulet_au_miel_semoule_epicee_et_carottes_roties.jpg'
      );
    insert into product(name, price, quantity, picture_url )
    values(
        'Poulet coco curry ecrase patate douce',
        4.9,
        2,
        'http://localhost:4000/images/Poulet_coco_curry_ecrase_patate_douce.jpg'
      );`);
  }

  public async down(): Promise<void> {
    return;
  }
}
