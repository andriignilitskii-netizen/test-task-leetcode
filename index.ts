function compressedString(word: string): string {
    let comp = '';
    let i = 0;

    while (i < word.length) {
        const c = word[i];
        let count = 0;

        while (i < word.length && word[i] === c && count < 9) {
            i++;
            count++;
        }

        comp += count.toString() + c;
    }

    return comp;
}
