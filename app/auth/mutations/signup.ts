import { Signup } from "app/auth/validations"
import { resolver, SecurePassword } from "blitz"
import db from "db"
import { Role } from "types"

export default resolver.pipe(
  resolver.zod(Signup),
  async ({ email, password, firstName, secondName }, ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    const userName = `${firstName} ${secondName}`
    const user = await db.user.create({
      data: {
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "USER",
        name: userName.trim(),
      },
      select: { id: true, name: true, email: true, role: true },
    })

    await ctx.session.$create({ userId: user.id, role: user.role as Role })
    return user
  }
)
