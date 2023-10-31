import { LightningElement, track, api } from 'lwc';

export default class Fall23ChildComponent extends LightningElement {

    @api valueFromApi = 'Dsiplaying Value from API';
    @track valueFromTrack = 'Display Value from Track';


    @api methodHandleByParentToChild(){
        this.valueFromTrack = 'I changed from Parent Component';
    }

    handleClick(){
        this.valueFromTrack = 'Button Hits, and I changed.';
    }
}