import { LightningElement, track} from 'lwc';

export default class Falle23ParentComponent extends LightningElement {

    @track inputFromUser;

    handleKeyUp(event) {
        const isEnterKey = event.keyCode === 13;
        if (isEnterKey) {
            this.inputFromUser = event.target.value;

            this.template.querySelector("c-fall23-child-component").methodHandleByParentToChild();
        }
    }

    
}