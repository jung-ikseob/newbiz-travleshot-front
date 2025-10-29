import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().min(1).email(),
  passportNumber: z.string().min(1).regex(/^[A-Z0-9-]{3,20}$/i),
  name: z.string().min(1),
  birthDate: z.string().min(1).refine((val) => {
    const iso = /^\d{4}-\d{2}-\d{2}$/;
    const dmy = /^\d{2}-\d{2}-\d{4}$/;
    let y: number, m: number, d: number;
    if (iso.test(val)) {
      const [yy, mm, dd] = val.split('-');
      y = Number(yy); m = Number(mm); d = Number(dd);
    } else if (dmy.test(val)) {
      const [dd, mm, yy] = val.split('-');
      y = Number(yy); m = Number(mm); d = Number(dd);
    } else {
      return false;
    }
    const dt = new Date(y, m - 1, d);
    return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
  }),
});

export type UserSchema = z.infer<typeof userSchema>;
