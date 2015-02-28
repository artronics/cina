<?php


use App\Model\Contact\Contact;
use Illuminate\Database\Seeder;

class ContactTableSeeder extends Seeder {

    private $contact;

    function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function run()
    {
        $contacts = [
            [
                'user_id'     => 5,
                'first_name'  => 'اصغر',
                'last_name'   => 'کیر خر',
                'mobile'      => '۰۱۹۲۹۳۳۸۴۹۴',
                'landline'    => '00986620617',
                'email'       => 'a@a.a',
                'description' => 'kir khar',
            ],
            [
                'user_id'     => 5,
                'first_name'  => 'asghar',
                'last_name'   => 'asgari',
                'mobile'      => '09123847744',
                'landline'    => '00986620617',
                'email'       => 'a@a.a',
                'description' => 'kir khar',
            ],
            [
                'user_id'     => 5,
                'first_name'  => 'asghar',
                'last_name'   => 'asgari',
                'mobile'      => '09123847744',
                'landline'    => '00986620617',
                'email'       => 'a@a.a',
                'description' => 'kir khar',
            ],
            [
                'user_id'     => 5,
                'first_name'  => 'asghar',
                'last_name'   => 'asgari',
                'mobile'      => '09123847744',
                'landline'    => '00986620617',
                'email'       => 'a@a.a',
                'description' => 'kir khar',
            ],
        ];

        //DB::table('users')->delete();
        $this->contact->truncate();
        foreach ($contacts as $contact)
        {

            $this->contact->create($contact);
        }
    }
}
