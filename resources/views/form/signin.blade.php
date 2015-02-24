{{ Form::open(array('route' => '','role' => 'form','class' => 'form')) }}
    <div class="form-group">
        <label for="signinEmail">Email address:</label>
        <input type="email" class="form-control" id="signinEmail" placeholder="Enter email">
    </div>
{{ Form::close() }}