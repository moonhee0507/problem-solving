function solution(new_id) {
    const recommandID = {
        id: new_id,
        toLower() {
            this.id = this.id.toLowerCase();
            return this.id;
        },
        deleteNotAllowed() {
            this.id = this.id.replace(/[^a-z0-9-_\.]/g, '');
            return this.id;
        },
        deleteDots() {
            this.id = this.id.replace(/[.]{2,}/g, '.');
            return this.id;
        },
        deleteDotsAtBothEnds() {
            this.id = this.id.replace(/^[.]/g, '').replace(/[.]$/g, '');
            return this.id;
        },
        fillNoChar() {
            if (this.id === '') this.id = 'a';
            return this.id;
        },
        cutLength() {
            this.id = this.id.slice(0, 15).replace(/[.]$/g, '');
            return this.id;
        },
        fill3Chars() {
            if (this.id.length <= 2) {
              const additionalChar = this.id[this.id.length - 1].repeat(3 - this.id.length);
              this.id = this.id + additionalChar;

              return this.id;
            }
        }
    };
    
    recommandID.toLower();
    recommandID.deleteNotAllowed();
    recommandID.deleteDots();
    recommandID.deleteDotsAtBothEnds();
    recommandID.fillNoChar();
    recommandID.cutLength();
    recommandID.fill3Chars();
    
    return recommandID.id;
}