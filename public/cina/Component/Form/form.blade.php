<div class="form" ng-controller="FormCtrl">
    <div class="contacts" ng-controller="ContactCtrl as cnt">
        <div class="row">
            <form action="" name="contacts">
                <div form-group label="First Name:" class="col-md-6">
                    <input type="text" class="form-control"
                    id="contact-name"
                    name="firstName"
                    ng-model="cnt.contact.firstName"/>
                </div>

                <div form-group label="Last Name:" class="col-md-6">
                    <input type="text" class="form-control"
                    id="contact-name"
                    ng-model="cnt.contact.lastName"/>
                </div>

                <div form-group label="Email:" class="col-md-12">
                    <input type="email" class="form-control"
                    name="contactEmail"
                    id="contact-email"
                    ng-model="cnt.contact.email"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>

    </div>
</div>