import { fakerTH,faker } from '@faker-js/faker';

const Color1 = faker.color.cmyk()
const Color2 = faker.color.cmyk({ format: 'decimal'})
const Color3 = faker.color.cmyk({ format: 'css'})
const Color4 = faker.color.cmyk({ format: 'binary'})

const Color5 = faker.color.colorByCSSColorSpace()
const Color6 = faker.color.colorByCSSColorSpace({ format: 'decimal'})
const Color7 = faker.color.colorByCSSColorSpace({ format: 'css', space: 'display-p3'})
const Color8 = faker.color.colorByCSSColorSpace({ format: 'binary'})

const Color9 = faker.color.cssSupportedFunction()

const Color10 = faker.color.hsl()
const Color11 = faker.color.hsl({ format: 'decimal'})
const Color12 = faker.color.hsl({ format: 'decimal', includeAlpha: true})
const Color13 = faker.color.hsl({ format: 'css',})
const Color14 = faker.color.hsl({ format: 'css', includeAlpha: true})
const Color15 = faker.color.hsl({ format: 'binary'})
const Color16 = faker.color.hsl({ format: 'binary', includeAlpha: true})

console.log(Color1)
console.log(Color2)
console.log(Color3)
console.log(Color4)

console.log(Color5)
console.log(Color6)
console.log(Color7)
console.log(Color8)

console.log("Color function name:",Color9)

console.log(Color10)
console.log(Color11)
console.log(Color12)
console.log(Color13)
console.log(Color14)
console.log(Color15)
console.log(Color16)
