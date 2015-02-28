<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Model\Contact\Contact;
use App\Model\User\User;
use Illuminate\Http\Request;

class PagesController extends Controller {

    private $user;
    private $contact;
    function __construct(User $user, Contact $contact)
    {
        $this->contact = $contact;
        $this->user = $user;
        $this->middleware('guest',['only' => ['welcome']]);
        $this->middleware('auth', ['only' => 'cina']);
    }


    /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function welcome()
	{
		return view('welcome');
	}

    public function cina()
    {
        return view('cina');
    }

    public function test()
    {
        //$contact = $this->contact->first();
        //$users = $this->user->find(5);
        //$users = $users->contacts;
        $users  = $this->user->find(5)->contacts()->get()->toJson();
        //dd($users);
        //return view('test');
        return response()->json($users);
    }


}
