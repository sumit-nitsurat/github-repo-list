import * as React from "react";

const renderRow = (row) => (
    <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.watchers_count}</td>
    </tr>
)

export const Table = ({ rows }) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Watchers Count</th>
            </tr>
        </thead>
        <tbody>
            {rows.map(row => renderRow(row))}
        </tbody>
    </table>
)