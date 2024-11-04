export default function DailyCardSkeleton() {
  const firstTable = [
    { one: 76, two: 24, three: 40 },
    { one: 56, two: 18, three: 36 },
    { one: 70, two: 20, three: 42 },
    { one: 60, two: 24, three: 38 }
  ]

  const secondTable = [
    { one: 56, two: 18, three: 36 },
    { one: 76, two: 24, three: 40 },
    { one: 60, two: 24, three: 38 },
    { one: 70, two: 20, three: 42 },
    { one: 66, two: 18, three: 36 },
    { one: 74, two: 24, three: 38 }
  ]

  return (
    <div className="w-1/3 rounded-md border border-neutral-600 bg-neutral-900 px-6 py-4">
      <div className="animate-pulse">
        <span className="mb-4 block h-6 w-36 rounded-md bg-neutral-700" />
        <div className="flex w-full flex-col gap-y-7">
          <div className="flex w-full items-center justify-between gap-x-4">
            <div className="size-[104px] rounded-full bg-neutral-700" />
            <table className="w-3/5">
              <thead className="border-b border-neutral-600">
                <tr>
                  <th className="w-6" />
                  <th className="w-24 py-1.5">
                    <span className="block h-5 rounded-md bg-neutral-700" />
                  </th>
                  <th className="py-1.5">
                    <span className="flex w-16 justify-center">
                      <span className="block h-5 w-10 rounded-md bg-neutral-700" />
                    </span>
                  </th>
                  <th className="py-1.5">
                    <span className="flex w-11 justify-end">
                      <span className="block h-5 w-6 rounded-md bg-neutral-700" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {firstTable.map(({ one, two, three }, index) => (
                  <tr key={index}>
                    <td>
                      <span className="my-1 mr-1 block size-3.5 rounded-full bg-neutral-700" />
                    </td>
                    <td>
                      <span
                        className="my-1 block h-5 rounded-md bg-neutral-700"
                        style={{ width: one }}
                      />
                    </td>
                    <td>
                      <span className="flex justify-center">
                        <span
                          className="my-1 h-5 rounded-md bg-neutral-700"
                          style={{ width: two }}
                        />
                      </span>
                    </td>
                    <td>
                      <span className="flex justify-end">
                        <span
                          className="my-1 block h-5 rounded-md bg-neutral-700"
                          style={{ width: three }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-[calc(7*32.5px)] overflow-x-hidden overflow-y-scroll">
            <table className="w-full">
              <thead className="border-b border-neutral-600">
                <tr>
                  <th className="w-6" />
                  <th className="w-40 py-1.5">
                    <span className="block h-5 w-[70px] rounded-md bg-neutral-700" />
                  </th>
                  <th className="py-1.5">
                    <span className="flex w-full justify-center pr-5">
                      <span className="block h-5 w-12 rounded-md bg-neutral-700" />
                    </span>
                  </th>
                  <th className="py-1.5">
                    <span className="flex w-full justify-end">
                      <span className="block h-5 w-6 rounded-md bg-neutral-700" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {secondTable.map(({ one, two, three }, index) => (
                  <tr key={index}>
                    <td>
                      <span className="my-1 mr-1 block size-3.5 rounded-full bg-neutral-700" />
                    </td>
                    <td>
                      <span
                        className="my-1 block h-5 rounded-md bg-neutral-700"
                        style={{ width: one }}
                      />
                    </td>
                    <td>
                      <span className="flex justify-center">
                        <span
                          className="my-1 h-5 rounded-md bg-neutral-700"
                          style={{ width: two }}
                        />
                      </span>
                    </td>
                    <td>
                      <span className="flex justify-end">
                        <span
                          className="my-1 block h-5 rounded-md bg-neutral-700"
                          style={{ width: three }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
