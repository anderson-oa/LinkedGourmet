export class ComicsModel {

    private description: string;

    constructor(
        public id: number,
        public title: string,
        public image: string,
        public isRare: boolean = false) { }
}