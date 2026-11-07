import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const SarthakProofStrip: React.FC = () => {
  return (
    <section className="proof-strip" data-editorial-reveal="true" aria-label="Career highlights">
      <div>
        <strong>
          3x<span>🏆</span>
        </strong>
        <p>consecutive hackathon champion (IIIT Kottayam &amp; Epochon 2.0)</p>
      </div>

      <div>
        <strong>
          &lt; 1<span>ms</span>
        </strong>
        <p>sub-millisecond state caching with Redis AsyncIO</p>
      </div>

      <div>
        <strong>
          &gt; 98<span>%</span>
        </strong>
        <p>CNN handwritten digit recognition test set accuracy</p>
      </div>

      <div>
        <strong>
          5<span>+</span>
        </strong>
        <p>production-grade intelligent systems deployed</p>
      </div>

      <a href="#hackathons">
        THE WORK.
        <br />
        THE VERIFIED IMPACT.
        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
      </a>
    </section>
  );
};
