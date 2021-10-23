import { t } from './i18n';
import { thaiTypoCheckWords } from 'thai-typo-check';

describe('i18n', () => {
  it('should not contain typos', () => {
    const inputString = JSON.stringify(t);
    expect(thaiTypoCheckWords(inputString, ['แดชบอร์ด', 'รีเฟรช', 'บจก', 'ธนาคารฯ', 'เม'])).toBe(undefined);
  });
});