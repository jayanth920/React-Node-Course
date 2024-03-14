
type RandomNumberType = {
    value: number;
}

type PositiveProps = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeProps = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}


type ZeroProps = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = PositiveProps | NegativeProps | ZeroProps

export const RandomNumber = (
    {
        value,
        isPositive,
        isNegative,
        isZero
    }: RandomNumberProps
) => {
    return (
        <div>
            {value}
            {isPositive && "positive"} {isNegative && "negative"} {' '}
            {isZero && "zero"}
        </div>
    )

}
