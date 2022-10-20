export default function Gallery(data) {
    return (
        <div className="container mx-auto p-8">
          <div className="flex flex-row flex-wrap -mx-2">
            <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto mb-4 px-2">
              <span className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover bg-[url(/one.jpg)]" href="#" title="Link">
              </span>
            </div>
            <div className="w-full md:w-1/2 mb-4 px-2">
              <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div className="w-full sm:w-1/2 sm:h-64 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                  <span className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover bg-[url(/two.jpg)]" href="#" title="Link" >
                  </span>
                </div>
                <div className="w-full sm:w-1/2 md:w-full sm:h-64 h-48 xl:h-64 px-2">
                  <span className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover bg-[url(/three.jpg)]" href="#" title="Link" >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
