<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Guard;

class HasAuthedUserAccess {

    protected $auth;

    function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }


    /**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
        //TODO: Implement this for authorization check
        //Check whether User is authenticated or not
        if ($this->auth->check())
        {
            //Check whether user is requesting cina app or not
            if ($request->is('cina/user/*'))
            {
                //check whether authed user id is the same as user_id
                if ($this->auth->user()->id == $request->user()->id)
                {
                    dd('kir');
                }
            }
        }

		return $next($request);
	}

}
