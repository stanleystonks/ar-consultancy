export default function Approach() {
  return (
    <section className="flex w-full flex-col px-8 md:px-12 lg:items-center lg:p-0">
      <h2 className="mb-0 w-full border border-foreground px-4 py-6 text-xl sm:hidden">
        My Approach:
        <br />
        Tailored A&R Mastery
      </h2>
      <h2 className="mb-0 hidden w-full border border-foreground px-4 py-6 sm:block sm:text-2xl md:text-2xl lg:w-3/5 lg:border-none lg:bg-card lg:text-center xl:py-10">
        My Approach: Tailored A&R Mastery
      </h2>

      <div className="flex w-full flex-col items-center justify-center bg-[url('https://res.cloudinary.com/dbcydcneq/image/upload/v1710190351/ar-consultancy/studio-background_w6goyq.png')]">
        <div className="flex flex-col border border-foreground bg-card px-4 py-6 lg:w-3/5 lg:border-none lg:bg-background lg:px-16 lg:py-12 xl:px-36 xl:py-16 ">
          <p className="font-medium uppercase">
            Personalized Online Consultations:
          </p>
          <p>
            Five one-on-one online meetings, starting with a comprehensive
            intake to understand you and your music career goals.
          </p>
          <p>
            The remaining four sessions, each an hour of transformative advice,
            will focus on some of the following topics, depending on your needs:
          </p>
          <ul className="mt-4 flex list-disc flex-col gap-3 pl-4 font-medium">
            <li>In-depth Music Track Analysis and Improvement Strategies</li>
            <li>Artist Branding Revamp and Advice</li>
            <li>Career Pathway Guidance and Structuring</li>
            <li>Insider Know-How: The Dos & Don'ts of the Music Business</li>
            <li>Music Industry Knowledge Expansion</li>
            <li>Publishing Administration Guidance</li>
            <li>Music Licensing Strategies</li>
            <li>Effective Artist Promotion Techniques</li>
            <li>Legal Counseling in Music Rights and Conflicts</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:bg-foreground">
        <div className="border border-foreground px-4 py-6 lg:w-3/5 lg:border-none lg:bg-card lg:px-16 lg:py-12 xl:px-36 xl:py-10">
          <h3 className="text-xl lg:hidden">
            <span>Consultation Package:</span>
            <br />
            <span className="font-thin">Price on Request</span>
          </h3>

          <h3 className="mb-2 hidden text-2xl lg:block">
            Consultation Package: Price on Request
          </h3>

          <p className="text-xl italic lg:text-base lg:font-medium lg:not-italic">
            * Clients are accepted on the basis of approval.
          </p>
        </div>
      </div>
    </section>
  );
}
