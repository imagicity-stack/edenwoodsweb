import { ReactNode } from "react";
import s from "./legal.module.css";

export const EMAIL = "contact@edenwoods.org";
export const PHONE = "+91 94319 04333";
export const PHONE_HREF = "tel:+919431904333";
export const ADDRESS =
  "Kolghatti, near Black Tank, Reformatory School S.O., Hazaribag, Jharkhand 825319";

const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
const Lead = ({ children }: { children: ReactNode }) => (
  <p className={s.lead}>{children}</p>
);
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className={s.h2}>{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className={s.p}>{children}</p>
);
const Ul = ({ children }: { children: ReactNode }) => (
  <ul className={s.ul}>{children}</ul>
);
const Rows = ({ rows }: { rows: [string, string][] }) => (
  <div className={s.rows}>
    {rows.map(([label, value]) => (
      <div className={s.row} key={label}>
        <div className={s.rowLabel}>{label}</div>
        <div className={s.rowValue}>{value}</div>
      </div>
    ))}
  </div>
);

const docs = [
  {
    href: "/assets/docs/12A-Registration.pdf",
    name: "12A Registration Order",
    meta: "Form 10AC · 11 Jul 2025",
  },
  {
    href: "/assets/docs/80G-Approval.pdf",
    name: "80G Approval Order",
    meta: "Form 10AC · 14 Jul 2025",
  },
  {
    href: "/assets/docs/MOA-INC-13.pdf",
    name: "Memorandum of Association",
    meta: "Form INC-13",
  },
  {
    href: "/assets/docs/AOA-INC-31.pdf",
    name: "Articles of Association",
    meta: "Form INC-31",
  },
];

const Registration = () => (
  <>
    <Lead>
      Edenwoods Eduhub Foundation is incorporated under Section 8 of the
      Companies Act, 2013 and holds registration and approval under the Income
      Tax Act, 1961. Our statutory documents are below.
    </Lead>
    <H2>Organisation</H2>
    <Rows
      rows={[
        ["Legal name", "Edenwoods Eduhub Foundation"],
        ["Constitution", "Section 8 company, Companies Act, 2013"],
        ["PAN", "AAICE2319K"],
        ["CIN", "[to be added]"],
        ["Registered office", ADDRESS],
      ]}
    />
    <H2>Section 12A registration</H2>
    <Rows
      rows={[
        ["Unique Registration No.", "AAICE2319KE20251"],
        ["Provision", "Section 12A(1)(ac)(vi)(A) — provisional registration"],
        ["Date of registration", "11 July 2025"],
        ["Valid for", "AY 2026-27 to AY 2028-29"],
      ]}
    />
    <H2>Section 80G approval</H2>
    <Rows
      rows={[
        ["Unique Registration No.", "AAICE2319KF20251"],
        [
          "Provision",
          "Section 80G(5), first proviso, clause (iv)(A) — provisional approval",
        ],
        ["Date of approval", "14 July 2025"],
        ["Valid for", "AY 2026-27 to AY 2028-29"],
      ]}
    />
    <p className={`${s.p} ${s.note}`}>
      Donations made from FY 2025-26 onwards qualify for deduction under
      Section 80G, subject to the limits set by law.
    </p>
    <H2>Documents</H2>
    <div className={s.docs}>
      {docs.map((d) => (
        <a
          key={d.href}
          href={d.href}
          target="_blank"
          rel="noopener noreferrer"
          className={s.doc}
        >
          <div className={s.docText}>
            <span className={s.docName}>{d.name}</span>
            <span className={s.docMeta}>{d.meta}</span>
          </div>
          <span className={s.docCta}>View PDF ↗</span>
        </a>
      ))}
    </div>
  </>
);

const Privacy = () => (
  <>
    <Lead>
      Edenwoods Eduhub Foundation (“the Foundation”, “we”, “us”) is a
      not-for-profit company registered under Section 8 of the Companies Act,
      2013, based in Hazaribagh, Jharkhand. We respect your privacy and handle
      personal data in line with the Digital Personal Data Protection Act, 2023
      and the Information Technology Act, 2000.
    </Lead>
    <H2>1. Information we collect</H2>
    <Ul>
      <li>
        <strong>Donors:</strong> name, email, phone, postal address, PAN (for
        80G receipts), and donation amount and date.
      </li>
      <li>
        <strong>Volunteers and partners:</strong> name, contact details,
        skills, availability, and any documents you share with us.
      </li>
      <li>
        <strong>Beneficiaries:</strong> details of children and families
        enrolled in our programs, collected only with parental or guardian
        consent.
      </li>
      <li>
        <strong>Website visitors:</strong> basic technical data such as browser
        type, pages visited and approximate location, collected through
        cookies.
      </li>
    </Ul>
    <P>
      We do not store card, UPI or net-banking credentials. Payments are
      processed by our payment gateway partner under its own security
      standards.
    </P>
    <H2>2. How we use it</H2>
    <Ul>
      <li>To process donations and issue receipts and 80G certificates.</li>
      <li>
        To meet statutory reporting duties, including filings with the Income
        Tax Department (Form 10BD).
      </li>
      <li>To coordinate volunteers, programs and partnerships.</li>
      <li>
        To send updates and impact reports, which you can opt out of at any
        time.
      </li>
    </Ul>
    <H2>3. Sharing</H2>
    <P>
      We never sell or rent personal data. We share it only with service
      providers who help us operate (payment gateways, email and hosting
      providers) under confidentiality obligations, or where the law requires
      it.
    </P>
    <H2>4. Children’s data</H2>
    <P>
      We collect information about children only with verifiable consent from
      a parent or guardian, and only what we need to run our programs.
      Photographs or stories of children are published only with written
      consent, and never with identifying details such as full name, home
      address or school.
    </P>
    <H2>5. Retention and security</H2>
    <P>
      We keep donation records for as long as tax and company law require,
      usually eight years. Other data is deleted once it is no longer needed.
      Access is restricted to authorised staff, and we use reasonable technical
      safeguards.
    </P>
    <H2>6. Your rights</H2>
    <P>
      You may ask to access, correct or erase your personal data, or withdraw
      consent, by writing to <Mail />. We will respond within 30 days.
    </P>
    <H2>7. Grievance Officer</H2>
    <P>
      Name: [Grievance Officer name]
      <br />
      Email: {EMAIL}
      <br />
      Phone: {PHONE}
      <br />
      Address: Edenwoods Eduhub Foundation, {ADDRESS}
    </P>
  </>
);

const Terms = () => (
  <>
    <Lead>
      By using edenwoods.org (“the website”), you agree to these Terms of Use.
      If you do not agree, please do not use the website.
    </Lead>
    <H2>1. About us</H2>
    <P>
      The website is operated by Edenwoods Eduhub Foundation, a Section 8
      not-for-profit company registered under 12A and 80G of the Income Tax
      Act, 1961, with its office in {ADDRESS}.
    </P>
    <H2>2. Use of the website</H2>
    <Ul>
      <li>Use the website only for lawful purposes.</li>
      <li>
        Do not try to gain unauthorised access to, disrupt, or damage the
        website or its systems.
      </li>
      <li>
        Information you submit, such as donation or volunteer forms, must be
        accurate and your own.
      </li>
    </Ul>
    <H2>3. Intellectual property</H2>
    <P>
      The Edenwoods name, logo, text, photographs and other content belong to
      the Foundation or are used with permission. You may share content for
      non-commercial purposes with credit. Any other use needs our prior
      written consent.
    </P>
    <H2>4. Donations</H2>
    <P>
      Donations are governed by our <a href="#donation">Donation Policy</a> and{" "}
      <a href="#refund">Refund &amp; Cancellation Policy</a>.
    </P>
    <H2>5. Third-party links</H2>
    <P>
      The website may link to third-party sites, including payment gateways.
      We are not responsible for their content or practices.
    </P>
    <H2>6. Limitation of liability</H2>
    <P>
      The website is provided “as is”. To the extent the law allows, the
      Foundation is not liable for any indirect or consequential loss arising
      from use of the website.
    </P>
    <H2>7. Governing law</H2>
    <P>
      These terms are governed by the laws of India. Disputes fall under the
      exclusive jurisdiction of the courts at Hazaribagh, Jharkhand.
    </P>
    <H2>8. Changes</H2>
    <P>
      We may update these terms from time to time. The “Last updated” date
      above shows the latest version.
    </P>
  </>
);

const Refund = () => (
  <>
    <Lead>
      Donations to Edenwoods Eduhub Foundation are voluntary and are put to
      work for our programs quickly, so they are generally non-refundable. We
      understand mistakes happen, and we will refund in the cases below.
    </Lead>
    <H2>1. When we refund</H2>
    <Ul>
      <li>A duplicate payment caused by a technical error.</li>
      <li>
        An amount different from what you intended, such as an extra zero.
      </li>
      <li>
        An unauthorised or fraudulent transaction made with your payment
        details.
      </li>
    </Ul>
    <H2>2. How to request a refund</H2>
    <P>
      Email <Mail /> within <strong>7 days</strong> of the donation. Include
      your name, transaction ID, date, amount and the reason for the request.
    </P>
    <H2>3. Processing</H2>
    <P>
      Approved refunds go back to the original payment method within{" "}
      <strong>7–10 working days</strong>. Payment gateway charges, if any, may
      be deducted.
    </P>
    <H2>4. 80G receipts</H2>
    <P>
      If a donation is refunded, any 80G receipt issued for it is cancelled and
      cannot be used to claim a tax deduction. If the donation has already been
      reported in our Form 10BD filing, we will correct it.
    </P>
    <H2>5. Cancelling a recurring donation</H2>
    <P>
      You can cancel a monthly donation at any time by emailing us, or through
      the mandate settings in your bank or UPI app. Cancellation stops future
      debits. Past debits are not refunded except as described above.
    </P>
  </>
);

const Donation = () => (
  <>
    <Lead>
      This policy explains how we accept, use and acknowledge donations.
    </Lead>
    <H2>1. Who can donate</H2>
    <P>
      We currently accept donations only from Indian citizens and entities
      registered in India, in Indian Rupees. We cannot accept foreign
      contributions as defined under the Foreign Contribution (Regulation) Act,
      2010.
    </P>
    <H2>2. Tax benefits</H2>
    <P>
      The Foundation is registered under Sections 12A and 80G of the Income Tax
      Act, 1961. Eligible donations qualify for a deduction under Section 80G,
      subject to the limits set by law. To get an 80G receipt, give your full
      name, address and PAN when you donate. Cash donations above ₹2,000 are
      not eligible for deduction.
    </P>
    <H2>3. Receipts</H2>
    <P>
      A receipt is emailed when your donation is confirmed. The Form 10BE
      certificate is issued after we file Form 10BD for the financial year.
    </P>
    <H2>4. Use of funds</H2>
    <P>
      Donations go to our charitable objects: education, scholarships, learning
      centres, digital literacy and related programs in Hazaribagh. Funds given
      for a specific program are used for that program. If it is fully funded
      or no longer running, we use the funds for the closest similar need.
    </P>
    <H2>5. Transparency</H2>
    <P>
      Our accounts are audited every year. You can request annual reports and
      audited financial statements at <Mail />.
    </P>
    <H2>6. Right to decline</H2>
    <P>
      We may decline any donation that conflicts with our values or mission, or
      that comes from a source we cannot verify.
    </P>
  </>
);

const Safeguarding = () => (
  <>
    <Lead>
      Every child in our programs has the right to be safe. The Foundation does
      not tolerate abuse, exploitation or neglect of any kind. This policy
      follows the Protection of Children from Sexual Offences (POCSO) Act, 2012
      and the Juvenile Justice (Care and Protection of Children) Act, 2015.
    </Lead>
    <H2>1. Who it applies to</H2>
    <P>
      All staff, trustees, volunteers, interns, consultants, partners and
      visitors who come into contact with children through the Foundation.
    </P>
    <H2>2. Our commitments</H2>
    <Ul>
      <li>
        Background and reference checks for everyone who works directly with
        children.
      </li>
      <li>
        Mandatory safeguarding orientation before anyone starts working with
        us.
      </li>
      <li>
        At least two adults present during any activity with children; no
        unsupervised one-to-one contact out of sight of others.
      </li>
      <li>
        No private communication with children on personal phones or social
        media.
      </li>
      <li>
        Photos and stories of children only with written guardian consent, and
        never with identifying details.
      </li>
    </Ul>
    <H2>3. Reporting a concern</H2>
    <P>
      Anyone can raise a concern, in confidence, with our Designated
      Safeguarding Officer at <Mail />. If a child is in immediate danger, call{" "}
      <strong>CHILDLINE 1098</strong> or the police on <strong>112</strong>. We
      report every concern that falls under POCSO to the authorities, as the
      law requires.
    </P>
    <H2>4. Response</H2>
    <P>
      Every report is taken seriously and handled confidentially. Anyone
      accused may be suspended while an inquiry takes place. Anyone found to
      have breached this policy is removed from the Foundation.
    </P>
  </>
);

const Volunteer = () => (
  <>
    <Lead>
      Volunteers are at the heart of our work. This code sets out what we
      expect from everyone who volunteers with the Foundation, and what you can
      expect from us.
    </Lead>
    <H2>As a volunteer, you will</H2>
    <Ul>
      <li>
        Read, sign and follow our{" "}
        <a href="#safeguarding">Child Safeguarding Policy</a>.
      </li>
      <li>
        Treat children, families and colleagues with respect, regardless of
        caste, religion, gender, disability or background.
      </li>
      <li>
        Arrive on time, and let your coordinator know in advance if you can’t
        attend.
      </li>
      <li>Keep information about beneficiaries confidential.</li>
      <li>
        Not accept or offer gifts, money or favours to or from beneficiaries.
      </li>
      <li>
        Not attend under the influence of alcohol or drugs, and not use tobacco
        at program sites.
      </li>
      <li>Not post photos or details of children on personal social media.</li>
    </Ul>
    <H2>The Foundation will</H2>
    <Ul>
      <li>Give you a clear role, an orientation and ongoing support.</li>
      <li>Provide a safe working environment.</li>
      <li>
        Issue a volunteering certificate when you complete your engagement.
      </li>
    </Ul>
    <P>Breaching this code may lead to the end of your volunteer engagement.</P>
  </>
);

const Cookies = () => (
  <>
    <Lead>
      Cookies are small text files stored on your device when you visit a
      website. We use them sparingly.
    </Lead>
    <H2>Cookies we use</H2>
    <Ul>
      <li>
        <strong>Essential:</strong> needed for the website and donation forms
        to work.
      </li>
      <li>
        <strong>Analytics:</strong> anonymous statistics on how visitors use
        the site, to help us improve it.
      </li>
      <li>
        <strong>Payment:</strong> set by our payment gateway partner to process
        transactions securely.
      </li>
    </Ul>
    <P>
      We do not use cookies for advertising. You can block or delete cookies in
      your browser settings, but some parts of the site may not work properly
      without them.
    </P>
  </>
);

const Disclaimer = () => (
  <>
    <Lead>
      The information on edenwoods.org is provided in good faith for general
      information only. We work to keep it accurate and up to date, but we make
      no guarantee that it is complete or current.
    </Lead>
    <P>
      Impact figures are based on the Foundation’s internal records for the
      period stated. Information about tax benefits is general guidance and is
      not tax advice. Please consult your tax advisor.
    </P>
    <P>
      The Foundation never asks for donations through personal bank accounts,
      and never asks for OTPs or passwords. If you get a suspicious request in
      our name, please report it to <Mail />.
    </P>
  </>
);

const NonDiscrimination = () => (
  <>
    <Lead>
      The Foundation is committed to equal opportunity. We do not discriminate
      on the basis of caste, religion, gender, gender identity, disability,
      ethnicity, language or economic status. This applies to choosing
      beneficiaries, hiring staff, engaging volunteers and choosing partners.
    </Lead>
    <P>
      We actively encourage girls, children with disabilities and
      first-generation learners to take part in our programs. We make
      reasonable adjustments so that everyone can do so.
    </P>
    <P>
      If you have a complaint about discrimination or harassment, email{" "}
      <Mail />. Complaints are handled in confidence. Workplace sexual
      harassment complaints are handled by our Internal Committee under the
      POSH Act, 2013.
    </P>
  </>
);

export const legalPages: { key: string; label: string; body: () => ReactNode }[] =
  [
    { key: "registration", label: "Registration & Certificates", body: Registration },
    { key: "privacy", label: "Privacy Policy", body: Privacy },
    { key: "terms", label: "Terms of Use", body: Terms },
    { key: "refund", label: "Refund & Cancellation", body: Refund },
    { key: "donation", label: "Donation Policy", body: Donation },
    { key: "safeguarding", label: "Child Safeguarding", body: Safeguarding },
    { key: "volunteer", label: "Volunteer Code of Conduct", body: Volunteer },
    { key: "cookies", label: "Cookie Policy", body: Cookies },
    { key: "disclaimer", label: "Disclaimer", body: Disclaimer },
    { key: "nondisc", label: "Non-Discrimination", body: NonDiscrimination },
  ];
