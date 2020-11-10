import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class TableComponent extends Component {
    @tracked userInfo = [];

    constructor(){
        super(...arguments);
        this.userInfo = this.args.userInfo;
    }
}
