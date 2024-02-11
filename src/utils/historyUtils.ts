export const renderOldStr = (change: any) => {
    var oldStr = change.replace(
        /<modified_to>(.*?)<\/modified_to>|<added>(.*?)<\/added>/g,
        function ([match, p1, p2]: any) {
            return p1 ? ' ' : p2 ? ' ' : '';
        },
    );

    oldStr = oldStr.replace(/<added>/g, ' ' + "<span class='none'>");
    oldStr = oldStr.replace(/<\/added>/g, '</span>');
    oldStr = oldStr.replace(/<modified_to>/g, ' ' + "<span class='none'>");
    oldStr = oldStr.replace(/<\/modified_to>/g, '</span>');

    oldStr = oldStr.replace(/<deleted>/g, ' ' + "<span class='delete'>");
    oldStr = oldStr.replace(/<\/deleted>/g, '</span>');
    oldStr = oldStr.replace(/<modified_from>/g, ' ' + "<span class='from'>");
    oldStr = oldStr.replace(/<\/modified_from>/g, '</span>');

    oldStr = oldStr.replace(/\r\n|\n|\r|\\r\\n|\\n|\\r/g, '<br/>');

    return { __html: oldStr };
};

export const renderNewStr = (change: any) => {
    let newStr = change.replace(
        /<modified_from>(.*?)<\/modified_from>|<deleted>(.*?)<\/deleted>/g,
        function (): string {
            return '';
        },
    );

    newStr = newStr.replace(/<deleted>/g, ' ' + "<span class='none'>");
    newStr = newStr.replace(/<\/deleted>/g, '</span>');
    newStr = newStr.replace(/<modified_from>/g, ' ' + "<span class='none'>");
    newStr = newStr.replace(/<\/modified_from>/g, '</span>');

    newStr = newStr.replace(/<added>/g, ' ' + "<span class='add'>");
    newStr = newStr.replace(/<\/added>/g, '</span>');
    newStr = newStr.replace(/<modified_to>/g, ' ' + "<span class='to'>");
    newStr = newStr.replace(/<\/modified_to>/g, '</span>');

    newStr = newStr.replace(/\r\n|\n|\r|\\r\\n|\\n|\\r/g, '<br/>');

    return { __html: newStr };
};
export const renderFirstStr = (content: any) => {
    let firstStr = content;

    firstStr = firstStr.replace(/\r\n|\n|\r|\\r\\n|\\n|\\r/g, '<br/>');
    firstStr = "<span class='add'>" + firstStr + '</span>';

    return { __html: firstStr };
};

export const parseAndFormatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
    };
    return date.toLocaleString('ko-KR', options);
};