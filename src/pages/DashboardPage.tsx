import { useSelector } from "react-redux";
import type { RootState } from "../store/Store";

const habits = [
  { label: "Plan the day", detail: "Set your three priorities", done: true },
  { label: "Deep work", detail: "One focused 60-minute block", done: false },
  { label: "Close the loop", detail: "Review what moved forward", done: false },
];

function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const firstName = user?.name?.split(" ")[0];

  return (
    <section className="dashboard-content">
      <div className="dashboard-heading">
        <div>
          <p className="eyebrow">Tuesday, August 25, 2026</p>
          <h1>Good morning, {firstName}.</h1>
          <p className="form-intro">Here is a gentle place to begin.</p>
        </div>
        <div className="streak">
          <span>✦</span>
          <strong>04</strong>
          <small>day streak</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <article className="focus-card">
          <div className="card-label">
            <span className="label-mark">✦</span> TODAY'S FOCUS
          </div>
          <h2>Make space for the work that matters.</h2>
          <p>
            Small, consistent progress is still progress. Choose one meaningful
            thing and give it your full attention.
          </p>
          <button className="secondary-button">
            Set a focus <span>→</span>
          </button>
        </article>
        <article className="habits-card">
          <div className="card-heading">
            <h3>Your rhythm</h3>
            <span>0 / 3 complete</span>
          </div>
          {habits.map((habit) => (
            <div className="habit-row" key={habit.label}>
              <span className={`check-circle ${habit.done ? "checked" : ""}`}>
                {habit.done ? "✓" : ""}
              </span>
              <div>
                <strong>{habit.label}</strong>
                <span>{habit.detail}</span>
              </div>
            </div>
          ))}
        </article>
      </div>

      <div className="learn-note">
        <span>i</span>
        <p>
          <strong>What just happened?</strong> The route guard checked Redux for
          a user, then this dashboard read that same user with{" "}
          <code>useSelector</code>.
        </p>
      </div>
    </section>
  );
}

export default DashboardPage;
