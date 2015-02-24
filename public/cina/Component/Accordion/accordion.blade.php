<div ng-controller="AccordionCtrl as acc">
    <accordion close-others="acc.oneAtATime">
        <accordion-group ng-repeat="menuItem in acc.menu" is-open="status.open">
              <accordion-heading>
                   <% menuItem.title %>  <i class="pull-right glyphicon"
                                            ng-class="{'glyphicon-chevron-down': status.open,
                                            'glyphicon-chevron-right': !status.open}">
                                        </i>
              </accordion-heading>
              <div ng-repeat="subtitle in menuItem.subtitles">
                   <p><a href="a"  ng-bind="subtitle.title"></a></p>
              </div>
        </accordion-group>
    </accordion>
</div>
