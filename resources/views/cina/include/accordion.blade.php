<div ng-controller="AccordionCtrl as acc">
    <accordion close-others="acc.oneAtATime">
        <accordion-group ng-repeat="group in acc.groups" is-open="status.open">
              <accordion-heading>
                <% group.title %>  <i class="pull-right glyphicon"
                                            ng-class="{'glyphicon-chevron-down': status.open,
                                            'glyphicon-chevron-right': !status.open}">
                                        </i>
              </accordion-heading>
              Some kirrr
        </accordion-group>
    </accordion>
</div>
