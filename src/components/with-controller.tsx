'use client'

import { InfoIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type WithControllerProps = {
  name: string
}

export function withController<T>(Component: ComponentType<Omit<T, 'name'>>) {
  const WithControllerComponent = ({
    name,
    ...props
  }: WithControllerProps & T) => {
    const {
      control,
      formState: { errors },
    } = useFormContext()

    const errorMessage = errors[name]?.message
    const displayError =
      typeof errorMessage === 'string' ? errorMessage : undefined

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              <Component {...field} {...props} />
              {displayError && (
                <div className="flex items-center gap-1">
                  <InfoIcon size={14} className="text-red-500" />
                  <small className="text-red-500 font-semibold">
                    {displayError}
                  </small>
                </div>
              )}
            </>
          )
        }}
      />
    )
  }

  return WithControllerComponent
}
