<?php namespace App\Model\Contact;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model {

    protected $table = 'contacts';

    protected $guarded = [
        'id',
        'user_id'
    ];
    public function user()
    {
        return $this->belongsTo('App\Model\User\User');
    }

}
