export function getOriginalObjectKey(s3ObjectKey: string): string {
  return s3ObjectKey.replace("redacted-", '').replace(process.env.TRANSCRIPTION_FILE_SUFFIX!, '');
}

export function shouldTranscribeBasedOnProbability(probability: number): boolean {
  
  if (probability < 0 || probability > 100) {
    throw new Error("Probability must be between 0 and 100");
  }

  // Generate a random number between 0 and 100
  const randomValue = Math.random() * 100;

  // If the random number is less than or equal to the probability, return true
  return randomValue <= probability;
}