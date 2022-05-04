import { isValidDateOrder, isValidDateRange } from './validateStartEndDate';

describe('Date validator tests', () => {
  const earlierMockDate = new Date('2020-01-01T00:00:00.000Z');
  const laterMockDate = new Date('2020-01-03T00:00:00.000Z');

  describe('Date order tests', () => {
    it('Should return true, when startDate is before endDate', () => {
      const response = isValidDateOrder(earlierMockDate, laterMockDate);
      expect(response).toBe(true);
    });

    it('Should return false, when startDate is after endDate', () => {
      const response = isValidDateOrder(laterMockDate, earlierMockDate);
      expect(response).toBe(false);
    });

    it('Should return true, when startDate is equal endDate', () => {
      const response = isValidDateOrder(earlierMockDate, earlierMockDate);
      expect(response).toBeFalsy();
    });
  });

  describe('Date range tests', () => {
    it('Should return true, when startDate and endDate diff is greater than 1 day', () => {
      const response = isValidDateRange(earlierMockDate, laterMockDate);
      expect(response).toBe(true);
    });

    it('Should return false, when startDate and endDate diff is less than 1 day', () => {
      const response = isValidDateRange(laterMockDate, laterMockDate);
      expect(response).toBe(false);
    });
  });
});
