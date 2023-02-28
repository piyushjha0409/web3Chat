import { AuthProvider, CHAIN } from '@arcana/auth'

//initializing the auth provider
const appAddress= import.meta.env.APP_ADDRESS
console.log(appAddress)

const auth = new AuthProvider(`${appAddress}`, {
  position: 'left',
  theme: 'light',
  alwaysVisible: false,
  chainConfig: {
    chainId: CHAIN.POLYGON_MAINNET,
    rpcUrl: '',
  },
})

await auth.init()
