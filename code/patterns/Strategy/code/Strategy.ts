import { IStrategy } from './IStrategy'

class TwitterStrategy implements IStrategy {
  authenticate(args: any[]): boolean {
    const [token] = args
    if (token !== 'secretApiToken') {
      console.log('TwitterStrategy: Invalid token')
      return false
    }
    console.log('TwitterStrategy: Authenticated')
    return true
  }
}

class LocalStrategy implements IStrategy {
  authenticate(args: any[]): boolean {
    const [username, password] = args
    if (username !== 'somelogin' || password !== 'somepassword') {
      console.log('LocalStrategy: Invalid username or password')
      return false
    }
    console.log('LocalStrategy: Authenticated')
    return true
  }
}
class Authenticator {
  private strategies: Record<string, IStrategy> = {}
  public use(strategyName: string, strategy: IStrategy) {
    this.strategies[strategyName] = strategy
  }
  public authenticate(strategyName: string, ...args: any[]) {
    if (!this.strategies[strategyName]) {
      console.log(`Authenticator: ${strategyName} strategy not found`)
      return false
    }
    return this.strategies[strategyName].authenticate.call(null, args)
  }
}

const authenticator = new Authenticator()
authenticator.use('twitter', new TwitterStrategy())
authenticator.use('local', new LocalStrategy())

const login = (strategyName: string, ...args: any[]) => {
  authenticator.authenticate(strategyName, ...args)
}

login('twitter', 'secretApiToken001')
login('local', 'somelogin', 'somepassword')
