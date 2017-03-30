import _ from 'lodash';
import moment from 'moment';

class HomeController {
	/*@ngInject*/
	constructor(ItemsService) {
		this.itemsService = ItemsService;
    this.users = [];
		this.comments = [];
	}

	$onInit() {
		this.itemsService
			.getData()
			.then((data) => {
        var groupedResults = _.groupBy(data.comments, function (result) {

          data.users.forEach((user)=>{
            if(user.username == result.username) {
              result.fullName = user.fullName;
            }
          });

          result.timeDay = moment(result.time).format('ll');
          result.timeHours = moment(result.time).format('LTS');
          return moment(result.time).startOf('day');
        });

        this.commentsLength = data.comments.length;
        this.comments = _.values(groupedResults);
        });
	}
}

const homeComponent = {
	template: require('./home.html'),
	controller: HomeController
};

export default homeComponent;

