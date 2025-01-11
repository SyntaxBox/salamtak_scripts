import { Post } from "contentlayer/generated";

export class Time {
  public static simpleFormate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  public static getLatestModifiedPostDate(allDocuments: Post[]) {
    let latestDate = new Date(0);

    for (const doc of allDocuments) {
      if (doc.lastUpdateDate) {
        const updateDate = new Date(doc.lastUpdateDate);
        if (updateDate > latestDate) {
          latestDate = updateDate;
        }
      }

      const publishDate = new Date(doc.publishDate);
      if (publishDate > latestDate) {
        latestDate = publishDate;
      }
    }

    return latestDate;
  }
}