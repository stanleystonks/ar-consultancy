export default function Approach() {
  return (
    <section
      id="approach"
      className="mb-16 flex w-full flex-col px-8 md:px-12 lg:mb-0 lg:items-center lg:p-0"
    >
      <h2 className="mb-0 w-full border border-foreground px-6 py-6 text-xl sm:text-2xl lg:w-3/5 lg:border-none lg:bg-card lg:text-center xl:py-10 xl:text-3xl">
        Personalized <br className="sm:hidden" />
        Online Consultations
      </h2>

      <div className="flex w-full flex-col items-center justify-center bg-[url('https://res.cloudinary.com/dbcydcneq/image/upload/v1710190351/ar-consultancy/studio-background_w6goyq.png')]">
        <div className="flex flex-col border border-foreground bg-card px-6 py-6 lg:w-3/5 lg:border-none lg:bg-background lg:px-16 lg:py-12 xl:px-36 xl:py-16 ">
          <p className="font-medium uppercase">
            Personalized Online Consultations:
          </p>
          <p className="font-medium">
            I am the authority to help you achieve your goals in the music
            industry through personalized 1-on-1 video consultation.
          </p>
          <p className="font-medium">
            We will focus on some of the following topics, depending on your
            needs:
          </p>
          <ul className="mt-4 flex list-disc flex-col gap-3 pl-4 font-light">
            <li>In-depth Music Track Analysis and Improvement Strategies</li>
            <li>Artist Branding Revamp and Advice</li>
            <li>Career Pathway Guidance and Structuring</li>
            <li>Insider Know-How: The Dos & Don'ts of the Music Business</li>
            <li>Music Industry Knowledge Expansion</li>
            <li>Publishing Administration Guidance</li>
            <li>Music Licensing Strategies</li>
            <li>Effective Artist Promotion Techniques</li>
            <li>Legal Counseling in Music Rights and Conflicts</li>
            <li>Comprehensive Music Career Q&A</li>
          </ul>
        </div>
      </div>

      {/* <div className="flex w-full items-center justify-center lg:bg-foreground">
        <div className="w-full border border-foreground px-6 py-6 lg:w-3/5 lg:border-none lg:bg-card lg:px-16 lg:py-12 xl:px-36 xl:py-10">
          <h3 className="text-xl lg:mb-2 lg:text-2xl">
            <span>Consultation Package:</span> <br className="lg:hidden" />
            <span className="font-thin lg:font-medium">Price on Request</span>
          </h3>

          <p className="text-xl italic lg:text-base lg:font-medium lg:not-italic lg:text-muted-foreground">
            * Clients are accepted on the basis of approval.
          </p>
        </div>
      </div> */}
    </section>
  );
}
