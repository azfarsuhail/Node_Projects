import { format, differenceInSeconds } from 'date-fns';

function getRemainingTime(targetDate: Date): number {
  const currentDate = new Date();
  return differenceInSeconds(targetDate, currentDate);
}

function startCountdown(targetDate: Date): void {
  const interval = setInterval(() => {
    const remainingTime = getRemainingTime(targetDate);

    if (remainingTime <= 0) {
      console.log('Countdown expired!');
      clearInterval(interval);
    } else {
      const formattedTime = format(new Date(remainingTime * 1000), 'HH:mm:ss');
      console.log(`Time remaining: ${formattedTime}`);
    }
  }, 1000);
}

const targetDate = new Date('2023-12-31T23:59:59'); // Set your target date and time here

console.log(`Countdown to: ${format(targetDate, 'MMMM d, yyyy HH:mm:ss')}`);
startCountdown(targetDate);
