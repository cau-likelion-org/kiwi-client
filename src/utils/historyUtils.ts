export const cleanImageTag = (str: string): string => {
	return str
		.replace(/<img\s+([^>]*?)\s*>/g, (match: string, p1: string) => {
			p1 = p1.replace(/(src\s*=\s*["'])(.*?)(["'])/g, (match: string, prefix: string, url: string, suffix: string) => {
				return prefix + url.replace(/\s+/g, '') + suffix;
			});
			return `<img ${p1.replace(/\s*=\s*/g, '=').replace(/\s+/g, ' ')}>`;
		})
		.replace(/"\s/g, '"')
		.replace(/\s"/g, '"')
		.trim();
};

export const renderOldStr = (change: string): { __html: string } => {
	let oldStr = change.replace(/<modified_to>(.*?)<\/modified_to>|<added>(.*?)<\/added>/g, (match, p1, p2) =>
		p1 ? ' ' : p2 ? ' ' : '',
	);

	oldStr = oldStr
		.replace(/<added>/g, " <span class='none'>")
		.replace(/<\/added>/g, '</span>')
		.replace(/<modified_to>/g, " <span class='none'>")
		.replace(/<\/modified_to>/g, '</span>')
		.replace(/<deleted>/g, " <span class='delete'>")
		.replace(/<\/deleted>/g, '</span>')
		.replace(/<modified_from>/g, " <span class='from'>")
		.replace(/<\/modified_from>/g, '</span>')
		.replace(/\r\n|\n|\r|\\r\\n|\\n|\\r/g, '<br/>');

	oldStr = cleanImageTag(oldStr);

	return { __html: oldStr };
};

export const renderNewStr = (change: string): { __html: string } => {
	let newStr = change.replace(/<modified_from>(.*?)<\/modified_from>|<deleted>(.*?)<\/deleted>/g, () => '');

	newStr = newStr
		.replace(/<deleted>/g, " <span class='none'>")
		.replace(/<\/deleted>/g, '</span>')
		.replace(/<modified_from>/g, " <span class='none'>")
		.replace(/<\/modified_from>/g, '</span>')
		.replace(/<added>/g, " <span class='add'>")
		.replace(/<\/added>/g, '</span>')
		.replace(/<modified_to>/g, " <span class='to'>")
		.replace(/<\/modified_to>/g, '</span>')
		.replace(/\r\n|\n|\r|\\r\\n|\\n|\\r/g, '<br/>');

	newStr = cleanImageTag(newStr);

	return { __html: newStr };
};

export const renderFirstStr = (content: string): { __html: string } => {
	let firstStr = content.replace(/\r\n|\n|\r|\\r\\n|\\n|\\r/g, '<br/>');
	firstStr = `<span class='add'>${firstStr}</span>`;

	firstStr = cleanImageTag(firstStr);

	return { __html: firstStr };
};

export const parseAndFormatDate = (dateString: string): string => {
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
