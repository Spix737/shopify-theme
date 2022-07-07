import React from 'react'

type Props = {}

interface CoffeeItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  size: string;
}

export default function Item({ }: Props) {
  return (
    <div>
      Item
    </div>
  )
}