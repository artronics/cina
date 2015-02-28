<div ng-controller="AccordionCtrl as acc">
    <accordion close-others="acc.oneAtATime">
        <accordion-group ng-repeat="menuItem in acc.menu" is-open="status.open">
              <accordion-heading>
                   <a  ui-sref="<% menuItem.state %>">
                         <span ng-bind="menuItem.title"></span>
                         <i class="pull-right glyphicon"
                            ng-class="{'glyphicon-chevron-down': status.open,
                            'glyphicon-chevron-right': !status.open}">
                        </i>
                   </a>
              </accordion-heading>
              <div ng-repeat="subtitle in menuItem.subtitles">
                   <p><a ui-sref="<% subtitle.state %> "  ng-bind="subtitle.title"></a></p>
              </div>
        </accordion-group>
    </accordion>
</div>
