<?php


use App\Model\User\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder{

    private $user;

    function __construct(User $user)
    {
        $this->user=$user;
    }

    public function run()
    {
        $password= Hash::make('q');
        $users = [
            ['name' => 'asghar',
             'email' => 'a@a.a',
             'password' => $password,
            ],
            ['name' => 'gholi',
             'email' => 'aa@a.a',
             'password' => $password,
            ],
            ['name' => 'jaakesh',
             'email' => 'aaa@a.a',
             'password' => $password,
            ],
            ['name' => 'kiri',
             'email' => 'aaaaa@a.a',
             'password' => $password,
            ],
            ['name' => 'jalal',
             'email' => 'q@q.q',
             'password' => $password,
            ],
            ['name' => 'jalal',
             'email' => 'jalalhosseiny@gmail.com',
             'password' => $password,
            ]
        ];

        //DB::table('users')->delete();
        $this->user->truncate();
        foreach ($users as $user){

            $this->user->create($user);
        }
    }
}
